import { NextResponse } from "next/server";

export async function GET() {
    // Works
    const worksRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/works?pagination=false`);
    const worksData = await worksRes.json();

    // Case Studies
    const caseRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?pagination=false`);
    const caseData = await caseRes.json();

    // Blogs
    const blogRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?pagination=false`);
    const blogData = await blogRes.json();

    // Escape Room Directory (Cities)
    const directoryRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/city-names?pagination=false`);
    const directoryData = await directoryRes.json();

    // Location Pages
    const locationRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/locations?fields[0]=location_name&fields[1]=slug`
    );
    const locationData = await locationRes.json();

    // Daily Digest (News Feeds)
    const digestRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/news-feeds?fields[0]=feed_title&fields[1]=slug&fields[2]=createdAt&pagination=false`
    );
    const digestData = await digestRes.json();

    const xml = generateSitemap({
        works: worksData.data,
        caseStudies: caseData.data,
        blogs: blogData.data,
        directory: directoryData.data,
        locations: locationData.data,
        digests: digestData.data,
    });

    return new NextResponse(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}

function generateSitemap({ works, caseStudies, blogs, directory, locations, digests }) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <!-- STATIC ROUTES -->
        ${staticRoutes()}

        <!-- WORKS -->
        ${works
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/works/${item.slug}</loc>
                <lastmod>${new Date(item.updatedAt).toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

        <!-- CASE STUDIES -->
        ${caseStudies
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/case-studies/${item.slug}</loc>
                <lastmod>${new Date(item.updatedAt).toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

        <!-- BLOGS -->
        ${blogs
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/blog/${item.slug}</loc>
                <lastmod>${new Date(item.updatedAt).toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

        <!-- ESCAPE ROOM DIRECTORY (City Names) -->
        ${directory
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/escape-rooms/${item.slug}</loc>
                <lastmod>${new Date(item.updatedAt).toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

        <!-- LOCATIONS -->
        ${locations
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/location/${item.slug}</loc>
                <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

        <!-- DAILY DIGEST -->
        ${digests
            ?.map(
                (item) => `
            <url>
                <loc>https://escaperoommarketer.com/daily-digest/${item.slug}</loc>
                <lastmod>${new Date(item.createdAt).toISOString().split("T")[0]}</lastmod>
            </url>`
            )
            .join("")}

    </urlset>`;
}

function staticRoutes() {
    const lastmod = "2025-12-01";

    const routes = [
        "/",
        "/bookingmax",
        "/testimonials",
        "/works",
        "/case-studies",
        "/blog",
        "/escape-rooms",
        "/about",
        "/team",
        "/faqs",
        "/partner-program",
        "/demo-call",
        "/client-call",
        "/contact",
        "/free-marketing",
        "/location",
        "/terms-of-service",
        "/privacy-policy",
        "/daily-digest",
    ];

    return routes
        .map(
            (route) => `
        <url>
            <loc>https://escaperoommarketer.com${route}</loc>
            <lastmod>${lastmod}</lastmod>
        </url>`
        )
        .join("");
}
