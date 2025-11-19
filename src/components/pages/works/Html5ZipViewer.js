"use client";
import JSZip from "jszip";
import { useEffect, useState } from "react";

export default function Html5ZipViewer({ zipFile }) {
  const [iframeSrc, setIframeSrc] = useState("");

  const zipUrl = `${process.env.NEXT_PUBLIC_API_URL + zipFile?.html5?.url}` 

  useEffect(() => {
    async function loadZip() {
      const response = await fetch(zipUrl);
      const blob = await response.blob();

      const zip = await JSZip.loadAsync(blob);

      // Find index.html (most html5 games use this)
      const indexFile = zip.file(/index\.html$/i)[0];
      if (!indexFile) return;

      // Create virtual folder structure
      const files = {};

      const loadFiles = Object.keys(zip.files).map(async (filename) => {
        const file = zip.files[filename];
        const ext = filename.split(".").pop();

        // Text-based assets
        if (!file.dir && ["html", "js", "css"].includes(ext)) {
          files[filename] = await file.async("text");
        }
        // Binary files like images
        else if (!file.dir) {
          const b = await file.async("blob");
          files[filename] = URL.createObjectURL(b);
        }
      });

      console.log(loadFiles);
      

      await Promise.all(loadFiles);

      // Replace asset paths inside index.html so the iframe can find them
      let htmlContent = files[indexFile.name];
      Object.keys(files).forEach((k) => {
        if (k !== indexFile.name) {
          htmlContent = htmlContent.replaceAll(k, files[k]);
        }
      });

      // Create iframe blob
      const htmlBlob = new Blob([htmlContent], { type: "text/html" });
      const htmlURL = URL.createObjectURL(htmlBlob);

      console.log(htmlURL);
      

      setIframeSrc(htmlURL);
      
    }

    loadZip();
  }, [zipUrl]);

  return (
    <div  style={{height: `${zipFile?.height}px`, width: `${zipFile?.width}px`}}>
      {iframeSrc ? (
        <iframe src={iframeSrc} className="w-full h-full border-0"></iframe>
      ) : (
        <p>Loading game...</p>
      )}
    </div>
  );
}


