"use client";
import { usePageLoaded } from "@/hooks/usePageLoaded";
import { useRef, useState, forwardRef, useImperativeHandle } from "react";
import ReactPlayer from "react-player";
import { MdPlayCircleFilled } from "react-icons/md";

const LazyLoadingVideo = forwardRef(
	({ video_url, autoPlay = true, controls = false, muted = true, loop = true, border_radious, poster, onPlay }, ref) => {
		const isLoaded = usePageLoaded();

		const videoRef = useRef(null);
		const [showControls, setShowControls] = useState(false);
		const [showPlayBtn, setShowPlayBtn] = useState(true);

		useImperativeHandle(ref, () => videoRef.current);

		const handlePlay = () => {
			setShowControls(true); // show controls
			setShowPlayBtn(false); // hide button
			videoRef.current.play(); // start video
			onPlay && onPlay(); // notify parent
		};

		

		return (
			<div className="absolute inset-0 z-10 ">
				{!isLoaded ? (
					// <img src="/pages/home/heroImage.png" alt="" className="w-full h-full object-cover" aria-hidden="true" draggable={false} />
					<div className="w-full h-full bg-secondary-950"></div>
				) : (
					<div className={` w-full h-full`}>
						<video
							ref={videoRef}
							src={video_url}
							autoPlay={autoPlay}
							loop={loop}
							muted={muted}
							poster={poster && process.env.NEXT_PUBLIC_API_URL + poster}
							playsInline
							controls={poster ? showControls : controls}
							controlsList="nofullscreen"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
							className="rounded-2xl"
							onPlay={onPlay}
						/>
						{poster && showPlayBtn && (
							<button
								onClick={handlePlay}
								className="group cursor-pointer absolute inset-0 flex justify-center items-center bg-[linear-gradient(0deg,rgba(13,17,22,0.6)_0%,rgba(13,17,22,0.6)_100%)]"
							>
								<div className="group-hover:drop-shadow-[0px_0px_13px_#E64027] duration-300 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="h-[48px] w-[48px]">
										<path
											d="M20 0C8.95445 0 0 8.9543 0 20C0 31.0457 8.95445 40 20 40C31.0455 40 40 31.0457 40 20C40 8.9543 31.0455 0 20 0ZM26.9125 21.0602L16.9125 27.3102C16.7102 27.4365 16.4801 27.5 16.25 27.5C16.0416 27.5 15.8328 27.4481 15.6439 27.3431C15.2466 27.1228 15 26.7047 15 26.25V13.75C15 13.2953 15.2466 12.8772 15.6439 12.6569C16.0413 12.4353 16.5271 12.4487 16.9125 12.6898L26.9125 18.9398C27.2778 19.1687 27.5 19.5691 27.5 20C27.5 20.4309 27.2778 20.8313 26.9125 21.0602Z"
											fill="#E64027"
										/>
										<path
											d="M20 0C8.95445 0 0 8.9543 0 20C0 31.0457 8.95445 40 20 40C31.0455 40 40 31.0457 40 20C40 8.9543 31.0455 0 20 0ZM26.9125 21.0602L16.9125 27.3102C16.7102 27.4365 16.4801 27.5 16.25 27.5C16.0416 27.5 15.8328 27.4481 15.6439 27.3431C15.2466 27.1228 15 26.7047 15 26.25V13.75C15 13.2953 15.2466 12.8772 15.6439 12.6569C16.0413 12.4353 16.5271 12.4487 16.9125 12.6898L26.9125 18.9398C27.2778 19.1687 27.5 19.5691 27.5 20C27.5 20.4309 27.2778 20.8313 26.9125 21.0602Z"
											fill="#E64027"
										/>
										<path
											d="M27.7289 19.3042L16.1661 11.8709C15.7828 11.6237 15.2717 11.7341 15.0244 12.1174C14.9381 12.2512 14.8923 12.4071 14.8926 12.5664V27.4329C14.8918 27.889 15.261 28.2594 15.7171 28.2601C15.8764 28.2604 16.0323 28.2146 16.1661 28.1283L27.7289 20.695C28.113 20.449 28.2249 19.9381 27.9788 19.554C27.9145 19.4537 27.8293 19.3684 27.7289 19.3042Z"
											fill="white"
										/>
									</svg>
								</div>
							</button>
						)}
					</div>
				)}
			</div>
		);
	}
);

LazyLoadingVideo.displayName = "LazyLoadingVideo";

export default LazyLoadingVideo;
