// "use client"

// import type React from "react"
// import { useState, useRef, useEffect } from "react"
// import VideoCard from "../components/VideoCard"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// const VIDEOS = [
//   {
//     id: "1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Summer Music Festival 2025 - Best Moments",
//     channel: "Music World",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.2M",
//     timestamp: "2 weeks ago",
//     duration: "15:24",
//   },
//   {
//     id: "2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Top 10 Travel Destinations You Need to Visit in 2025",
//     channel: "Travel Explore",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "845K",
//     timestamp: "1 month ago",
//     duration: "22:14",
//   },
//   {
//     id: "3",
//     thumbnail:
//       "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Easy 30-Minute Recipes for Busy People",
//     channel: "Food Master",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "450K",
//     timestamp: "3 weeks ago",
//     duration: "28:42",
//   },
//   {
//     id: "4",
//     thumbnail:
//       "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Incredible Sports Moments That Made History",
//     channel: "Sports Central",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "780K",
//     timestamp: "5 days ago",
//     duration: "12:18",
//   },
//   {
//     id: "5",
//     thumbnail:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "The Most Anticipated Movies of 2025",
//     channel: "Film Fanatic",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.5M",
//     timestamp: "2 months ago",
//     duration: "18:05",
//   },
//   {
//     id: "6",
//     thumbnail:
//       "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Inside the World's Most Luxurious Mansions",
//     channel: "Luxury Living",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "320K",
//     timestamp: "1 week ago",
//     duration: "32:47",
//   },
//   {
//     id: "7",
//     thumbnail:
//       "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "How to Build Muscle Fast - Complete Workout Guide",
//     channel: "Fitness Pro",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "890K",
//     timestamp: "3 months ago",
//     duration: "24:32",
//   },
//   {
//     id: "8",
//     thumbnail:
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "DIY Home Decor Ideas That Will Transform Your Space",
//     channel: "Home & Design",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.1M",
//     timestamp: "2 weeks ago",
//     duration: "25:18",
//   },
//   {
//     id: "9",
//     thumbnail:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "The Future of AI in Web Development",
//     channel: "Tech Insights",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "980K",
//     timestamp: "1 month ago",
//     duration: "20:15",
//   },
//   {
//     id: "10",
//     thumbnail:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "How to Start a Successful Tech Startup",
//     channel: "Entrepreneur Today",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.5M",
//     timestamp: "3 weeks ago",
//     duration: "28:42",
//   },
//   {
//     id: "11",
//     thumbnail:
//       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Mastering Python: Advanced Techniques",
//     channel: "Code Masters",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "750K",
//     timestamp: "1 month ago",
//     duration: "45:18",
//   },
//   {
//     id: "13",
//     thumbnail:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Financial Planning for Millennials",
//     channel: "Money Matters",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "890K",
//     timestamp: "3 weeks ago",
//     duration: "22:30",
//   },
//   {
//     id: "14",
//     thumbnail:
//       "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Full Body HIIT Workout - No Equipment Needed",
//     channel: "Fitness Freaks",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.8M",
//     timestamp: "1 week ago",
//     duration: "35:42",
//   },
//   {
//     id: "15",
//     thumbnail:
//       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Gourmet Cooking at Home: Chef's Secrets",
//     channel: "Culinary Delights",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "720K",
//     timestamp: "4 weeks ago",
//     duration: "41:15",
//   },
//   {
//     id: "16",
//     thumbnail:
//       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Cybersecurity Essentials for Small Businesses",
//     channel: "Tech Guard",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "550K",
//     timestamp: "2 weeks ago",
//     duration: "27:50",
//   },
//   {
//     id: "17",
//     thumbnail:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Mastering Digital Marketing Strategies",
//     channel: "Marketing Pros",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "980K",
//     timestamp: "3 weeks ago",
//     duration: "38:20",
//   },
//   {
//     id: "18",
//     thumbnail:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Effective Time Management for Professionals",
//     channel: "Productivity Hub",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "670K",
//     timestamp: "1 month ago",
//     duration: "25:10",
//   },
// ]

// const CATEGORIES = [
//   "All",
//   "Music",
//   "Gaming",
//   "Movies",
//   "Sports",
//   "News",
//   "Fashion",
//   "Cooking",
//   "Travel",
//   "Comedy",
//   "Education",
//   "Technology",
//   "Fun",
//   "Festival",
//   "Luxurious",
// ]

// const HomePage = () => {
//   const [activeCategory, setActiveCategory] = useState("All")
//   const [showLeftArrow, setShowLeftArrow] = useState(false)
//   const [showRightArrow, setShowRightArrow] = useState(true)
//   const categoryRef = useRef<HTMLDivElement>(null)

//   const scrollCategories = (direction: "left" | "right") => {
//     if (categoryRef.current) {
//       const scrollAmount = direction === "left" ? -200 : 200
//       categoryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
//     }
//   }

//   const handleCategoryClick = (category: string) => {
//     setActiveCategory(category)
//     // In a real app, this would filter videos based on category
//   }

//   const checkScroll = () => {
//     if (categoryRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current

//       setShowLeftArrow(scrollLeft > 20)
//       setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20)
//     }
//   }

//   useEffect(() => {
//     const categoryContainer = categoryRef.current
//     if (categoryContainer) {
//       categoryContainer.addEventListener("scroll", checkScroll)
//       checkScroll()
//       const timeoutId = setTimeout(checkScroll, 100)
//       return () => {
//         clearTimeout(timeoutId)
//         categoryContainer.removeEventListener("scroll", checkScroll)
//       }
//     }
//   }, []) //Fixed this useEffect

//   useEffect(() => {
//     const handleResize = () => {
//       checkScroll()
//     }
//     window.addEventListener("resize", handleResize)
//     return () => {
//       window.removeEventListener("resize", handleResize)
//     }
//   }, []) //Fixed this useEffect

//   return (
//     <div className="p-4">
//       <div className="position-relative mb-4">
//         {showLeftArrow && (
//           <div
//             className="position-absolute start-0 top-0 h-100 d-flex align-items-center"
//             style={{
//               background: "linear-gradient(to right, rgba(242, 242, 242, 1) 20%, rgba(242, 242, 242, 0) 100%)",
//               zIndex: 1,
//             }}
//           >
//             <button
//               onClick={() => scrollCategories("left")}
//               className="btn rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
//               style={{
//                 width: "32px",
//                 height: "32px",
//                 marginLeft: "10px",
//                 backgroundColor: "rgba(242, 242, 242, 0.9)",
//               }}
//             >
//               <ChevronLeft size={20} color="#606060" />
//             </button>
//           </div>
//         )}

//         <div
//           ref={categoryRef}
//           className="d-flex overflow-auto pb-2 scrollbar-hide"
//           style={{
//             scrollBehavior: "smooth",
//             paddingLeft: showLeftArrow ? "50px" : "0",
//             paddingRight: showRightArrow ? "50px" : "0",
//           }}
//         >
//           {CATEGORIES.map((category) => (
//             <CategoryButton
//               key={category}
//               label={category}
//               active={activeCategory === category}
//               onClick={() => handleCategoryClick(category)}
//             />
//           ))}
//         </div>

//         {showRightArrow && (
//           <div
//             className="position-absolute end-0 top-0 h-100 d-flex align-items-center justify-content-end"
//             style={{
//               background: "linear-gradient(to left, rgba(242, 242, 242, 1) 20%, rgba(242, 242, 242, 0) 100%)",
//               zIndex: 1,
//             }}
//           >
//             <button
//               onClick={() => scrollCategories("right")}
//               className="btn rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
//               style={{
//                 width: "32px",
//                 height: "32px",
//                 marginRight: "10px",
//                 backgroundColor: "rgba(242, 242, 242, 0.9)",
//               }}
//             >
//               <ChevronRight size={20} color="#606060" />
//             </button>
//           </div>
//         )}
//       </div>

//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//         {VIDEOS.map((video) => (
//           <div key={video.id} className="col">
//             <VideoCard {...video} />
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// interface CategoryButtonProps {
//   label: string
//   active?: boolean
//   onClick: () => void
// }

// const CategoryButton: React.FC<CategoryButtonProps> = ({ label, active = false, onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       className={`btn btn-sm rounded-pill me-2 ${active ? "btn-dark" : "btn-light"}`}
//       style={{
//         whiteSpace: "nowrap",
//         padding: "6px 12px",
//         fontSize: "14px",
//         fontWeight: active ? "500" : "400",
//         backgroundColor: active ? "#0f0f0f" : "#f2f2f2",
//         color: active ? "#fff" : "#0f0f0f",
//         border: "none",
//         transition: "background-color 0.2s, color 0.2s",
//       }}
//     >
//       {label}
//     </button>
//   )
// }

// export default HomePage


"use client";

import type React from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import VideoCard from "../components/VideoCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define video data with categories
// const VIDEOS = [
//   {
//     id: "1",
//     thumbnail:
//       "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Summer Music Festival 2025 - Best Moments",
//     channel: "Music World",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.2M",
//     timestamp: "2 weeks ago",
//     duration: "15:24",
//     category: "Music", // Added category
//   },
//   {
//     id: "2",
//     thumbnail:
//       "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Top 10 Travel Destinations You Need to Visit in 2025",
//     channel: "Travel Explore",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "845K",
//     timestamp: "1 month ago",
//     duration: "22:14",
//     category: "Travel", // Added category
//   },
//   {
//     id: "3",
//     thumbnail:
//       "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Easy 30-Minute Recipes for Busy People",
//     channel: "Food Master",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "450K",
//     timestamp: "3 weeks ago",
//     duration: "28:42",
//     category: "Cooking", // Added category
//   },
//   {
//     id: "4",
//     thumbnail:
//       "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Incredible Sports Moments That Made History",
//     channel: "Sports Central",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "780K",
//     timestamp: "5 days ago",
//     duration: "12:18",
//     category: "Sports"
//   },
//   {
//     id: "5",
//     thumbnail:
//       "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "The Most Anticipated Movies of 2025",
//     channel: "Film Fanatic",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.5M",
//     timestamp: "2 months ago",
//     duration: "18:05",
//     category: "Movies"
//   },
//   {
//     id: "6",
//     thumbnail:
//       "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Inside the World's Most Luxurious Mansions",
//     channel: "Luxury Living",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "320K",
//     timestamp: "1 week ago",
//     duration: "32:47",
//     category: "Luxurious"
//   },
//   {
//     id: "7",
//     thumbnail:
//       "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "How to Build Muscle Fast - Complete Workout Guide",
//     channel: "Fitness Pro",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "890K",
//     timestamp: "3 months ago",
//     duration: "24:32",
//     category: "Fitness"
//   },
//   {
//     id: "8",
//     thumbnail:
//       "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "DIY Home Decor Ideas That Will Transform Your Space",
//     channel: "Home & Design",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.1M",
//     timestamp: "2 weeks ago",
//     duration: "25:18",
//     category: "Fun"
//   },
//   {
//     id: "9",
//     thumbnail:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "The Future of AI in Web Development",
//     channel: "Tech Insights",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "980K",
//     timestamp: "1 month ago",
//     duration: "20:15",
//     category: "Technology"
//   },
//   {
//     id: "10",
//     thumbnail:
//       "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "How to Start a Successful Tech Startup",
//     channel: "Entrepreneur Today",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.5M",
//     timestamp: "3 weeks ago",
//     duration: "28:42",
//     category: "Marketing"
//   },
//   {
//     id: "11",
//     thumbnail:
//       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Mastering Python: Advanced Techniques",
//     channel: "Code Masters",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "750K",
//     timestamp: "1 month ago",
//     duration: "45:18",
//     category: "Technology"
//   },
//   {
//     id: "13",
//     thumbnail:
//       "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Financial Planning for Millennials",
//     channel: "Money Matters",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "890K",
//     timestamp: "3 weeks ago",
//     duration: "22:30",
//     category: "Marketing"
//   },
//   {
//     id: "14",
//     thumbnail:
//       "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Full Body HIIT Workout - No Equipment Needed",
//     channel: "Fitness Freaks",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "1.8M",
//     timestamp: "1 week ago",
//     duration: "35:42",
//     category: "Fitness"
//   },
//   {
//     id: "15",
//     thumbnail:
//       "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Gourmet Cooking at Home: Chef's Secrets",
//     channel: "Culinary Delights",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "720K",
//     timestamp: "4 weeks ago",
//     duration: "41:15",
//     category: "Cooking"
//   },
//   {
//     id: "16",
//     thumbnail:
//       "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Cybersecurity Essentials for Small Businesses",
//     channel: "Tech Guard",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "550K",
//     timestamp: "2 weeks ago",
//     duration: "27:50",
//     category: "Technology"
//   },
//   {
//     id: "17",
//     thumbnail:
//       "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Mastering Digital Marketing Strategies",
//     channel: "Marketing Pros",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "980K",
//     timestamp: "3 weeks ago",
//     duration: "38:20",
//     category: "Marketing"
//   },
//   {
//     id: "18",
//     thumbnail:
//       "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
//     title: "Effective Time Management for Professionals",
//     channel: "Productivity Hub",
//     channelAvatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
//     views: "670K",
//     timestamp: "1 month ago",
//     duration: "25:10",
//     category: "Festival"
//   },

// ];

// const CATEGORIES = [
//   "All",
//   "Music",
//   "Gaming",
//   "Movies",
//   "Sports",
//   "News",
//   "Fashion",
//   "Cooking",
//   "Travel",
//   "Comedy",
//   "Education",
//   "Technology",
//   "Fun",
//   "Fitness",
//   "Marketing",
//   "Festival",
//   "Luxurious",
// ];

const VIDEOS = [
  {
    id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Summer Music Festival 2025 - Best Moments",
    channel: "Music World",
    channelAvatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.2M",
    timestamp: "2 weeks ago",
    duration: "15:24",
    category: "Music",
  },
  {
    id: "2",
    thumbnail:
      "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Top 10 Travel Destinations You Need to Visit in 2025",
    channel: "Travel Explore",
    channelAvatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "845K",
    timestamp: "1 month ago",
    duration: "22:14",
    category: "Travel",
  },
  {
    id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Easy 30-Minute Recipes for Busy People",
    channel: "Food Master",
    channelAvatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "450K",
    timestamp: "3 weeks ago",
    duration: "28:42",
    category: "Cooking",
  },
  {
    id: "4",
    thumbnail:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Incredible Sports Moments That Made History",
    channel: "Sports Central",
    channelAvatar:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "780K",
    timestamp: "5 days ago",
    duration: "12:18",
    category: "Sports",
  },
  {
    id: "5",
    thumbnail:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "The Most Anticipated Movies of 2025",
    channel: "Film Fanatic",
    channelAvatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.5M",
    timestamp: "2 months ago",
    duration: "18:05",
    category: "Movies",
  },
  {
    id: "6",
    thumbnail:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Inside the World's Most Luxurious Mansions",
    channel: "Luxury Living",
    channelAvatar:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "320K",
    timestamp: "1 week ago",
    duration: "32:47",
    category: "Luxurious",
  },
  {
    id: "7",
    thumbnail:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "How to Build Muscle Fast - Complete Workout Guide",
    channel: "Fitness Pro",
    channelAvatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "890K",
    timestamp: "3 months ago",
    duration: "24:32",
    category: "Fitness",
  },
  {
    id: "8",
    thumbnail:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "DIY Home Decor Ideas That Will Transform Your Space",
    channel: "Home & Design",
    channelAvatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.1M",
    timestamp: "2 weeks ago",
    duration: "25:18",
    category: "Fun",
  },
  {
    id: "9",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "The Future of AI in Web Development",
    channel: "Tech Insights",
    channelAvatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "980K",
    timestamp: "1 month ago",
    duration: "20:15",
    category: "Technology",
  },
  {
    id: "10",
    thumbnail:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "How to Start a Successful Tech Startup",
    channel: "Entrepreneur Today",
    channelAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.5M",
    timestamp: "3 weeks ago",
    duration: "28:42",
    category: "Marketing",
  },
  {
    id: "11",
    thumbnail:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Mastering Python: Advanced Techniques",
    channel: "Code Masters",
    channelAvatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "750K",
    timestamp: "1 month ago",
    duration: "45:18",
    category: "Technology",
  },

  {
    id: "13",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Financial Planning for Millennials",
    channel: "Money Matters",
    channelAvatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "890K",
    timestamp: "3 weeks ago",
    duration: "22:30",
    category: "Marketing",
  },
  {
    id: "14",
    thumbnail:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Full Body HIIT Workout - No Equipment Needed",
    channel: "Fitness Freaks",
    channelAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.8M",
    timestamp: "1 week ago",
    duration: "35:42",
    category: "Fitness",
  },
  {
    id: "15",
    thumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Gourmet Cooking at Home: Chef's Secrets",
    channel: "Culinary Delights",
    channelAvatar:
      "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "720K",
    timestamp: "4 weeks ago",
    duration: "41:15",
    category: "Cooking",
  },
  {
    id: "16",
    thumbnail:
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Cybersecurity Essentials for Small Businesses",
    channel: "Tech Guard",
    channelAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "550K",
    timestamp: "2 weeks ago",
    duration: "27:50",
    category: "Technology",
  },
  {
    id: "17",
    thumbnail:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Mastering Digital Marketing Strategies",
    channel: "Marketing Pros",
    channelAvatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "980K",
    timestamp: "3 weeks ago",
    duration: "38:20",
    category: "Marketing",
  },
  {
    id: "18",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Effective Time Management for Professionals",
    channel: "Productivity Hub",
    channelAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "670K",
    timestamp: "1 month ago",
    duration: "25:10",
    category: "Education",
  },
  {
    id: "19",
    thumbnail:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "The Best Gaming Setups of 2025",
    channel: "Gaming Central",
    channelAvatar:
      "https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "1.3M",
    timestamp: "2 weeks ago",
    duration: "19:45",
    category: "Gaming",
  },
  {
    id: "20",
    thumbnail:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    title: "Fashion Trends for Summer 2025",
    channel: "Fashion Forward",
    channelAvatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    views: "950K",
    timestamp: "1 week ago",
    duration: "14:22",
    category: "Fashion",
  },
];

const CATEGORIES = [
  "All",
  "Music",
  "Technology",
  "Gaming",
  "Movies",
  "Sports",
  "Fitness",
  "Marketing",
  "Luxurious",
  "Fashion",
  "Cooking",
  "Travel",
  "Education",
  "Fun",
];

interface HomePageProps {
  darkMode?: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ darkMode = false }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Filter videos based on the active category
  const filteredVideos =
    activeCategory === "All"
      ? VIDEOS
      : VIDEOS.filter((video) => video.category === activeCategory);

  const scrollCategories = useCallback((direction: "left" | "right") => {
    if (categoryRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      categoryRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  const handleCategoryClick = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  const checkScroll = useCallback(() => {
    if (categoryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryRef.current;
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);
    }
  }, []);

  useEffect(() => {
    const categoryContainer = categoryRef.current;
    if (categoryContainer) {
      categoryContainer.addEventListener("scroll", checkScroll);
      checkScroll();
      const timeoutId = setTimeout(checkScroll, 100);
      return () => {
        clearTimeout(timeoutId);
        categoryContainer.removeEventListener("scroll", checkScroll);
      };
    }
  }, [checkScroll]);

  useEffect(() => {
    const handleResize = () => {
      checkScroll();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [checkScroll]);

  return (
    <div className={`container mt-4 ${darkMode ? "text-white" : "text-dark"}`}>
      <div className="position-relative mb-4">
        {showLeftArrow && (
          <div
            className="position-absolute start-0 top-0 h-100 d-flex align-items-center"
            style={{
              background:
                "linear-gradient(to right, rgba(242, 242, 242, 1) 20%, rgba(242, 242, 242, 0) 100%)",
              zIndex: 1,
            }}
          >
            <button
              onClick={() => scrollCategories("left")}
              className="btn rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
              style={{
                width: "32px",
                height: "32px",
                marginLeft: "10px",
                backgroundColor: "rgba(242, 242, 242, 0.9)",
              }}
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} color="#606060" />
            </button>
          </div>
        )}

        <div
          ref={categoryRef}
          className="d-flex overflow-auto pb-2 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            paddingLeft: showLeftArrow ? "50px" : "0",
            paddingRight: showRightArrow ? "50px" : "0",
          }}
        >
          {CATEGORIES.map((category) => (
            <CategoryButton
              key={category}
              label={category}
              active={activeCategory === category}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>

        {showRightArrow && (
          <div
            className="position-absolute end-0 top-0 h-100 d-flex align-items-center justify-content-end"
            style={{
              background:
                "linear-gradient(to left, rgba(242, 242, 242, 1) 20%, rgba(242, 242, 242, 0) 100%)",
              zIndex: 1,
            }}
          >
            <button
              onClick={() => scrollCategories("right")}
              className="btn rounded-circle d-flex align-items-center justify-content-center p-0 border-0"
              style={{
                width: "32px",
                height: "32px",
                marginRight: "10px",
                backgroundColor: "rgba(242, 242, 242, 0.9)",
              }}
              aria-label="Scroll right"
            >
              <ChevronRight size={20} color="#606060" />
            </button>
          </div>
        )}
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredVideos.map((video) => (
          <div key={video.id} className="col">
            <VideoCard {...video} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface CategoryButtonProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`btn btn-sm rounded-pill me-2 ${active ? "btn-dark" : "btn-light"}`}
      style={{
        whiteSpace: "nowrap",
        padding: "6px 12px",
        fontSize: "14px",
        fontWeight: active ? "500" : "400",
        backgroundColor: active ? "#0f0f0f" : "#f2f2f2",
        color: active ? "#fff" : "#0f0f0f",
        border: "none",
        transition: "background-color 0.2s, color 0.2s",
      }}
      aria-label={`Filter by ${label}`}
    >
      {label}
    </button>
  );
};

export default HomePage;