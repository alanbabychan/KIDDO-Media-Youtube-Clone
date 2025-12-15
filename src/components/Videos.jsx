import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if(!videos?.length) return <Loader />;
  
  return (
    <Stack 
      direction={direction || "row"} 
      flexWrap="wrap" 
      justifyContent="flex-start" 
      alignItems="flex-start" 
      sx={{
        gap: { xs: 1, sm: 2, md: 3 },
        '& > *': {
          flex: { xs: '1 1 calc(50% - 8px)', sm: '1 1 calc(33.333% - 16px)', md: '1 1 calc(25% - 24px)' },
          maxWidth: { xs: 'calc(50% - 8px)', sm: 'calc(33.333% - 16px)', md: 'calc(25% - 24px)' }
        }
      }}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
