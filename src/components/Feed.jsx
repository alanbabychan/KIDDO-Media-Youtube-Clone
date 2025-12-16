import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box sx={{ 
        height: { xs: "auto", md: "92vh" }, 
        borderRight: "1px solid #3d3d3d", 
        px: { xs: 0, md: 2 },
        width: { xs: "100%", md: "240px" },
        minWidth: "240px"
      }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", px: 2 }}>
          Copyright © 2025 KIDDO
        </Typography>
      </Box>

      <Box sx={{ 
        overflowY: "auto", 
        height: "90vh", 
        flex: 1,
        p: { xs: 1, md: 3 },
        maxWidth: "calc(100vw - 240px)"
      }}>
        <Typography variant="h4" fontWeight="bold" mb={3} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} />
        
        <Typography variant="body2" sx={{ mt: 4, mb: 2, color: "#fff", textAlign: "center" }}>
          Developed by{" "}
          <a
            href="https://github.com/alanbabychan"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FC1503", textDecoration: "none", fontWeight: 600 }}
          >
            KIDDO
          </a>
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;
