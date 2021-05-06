import PopularFonts from './fonts/PopularFonts';
import RecentFonts from './fonts/RecentFonts';
import TrendingFonts from './fonts/TrendingFonts';
import React from 'react';

const Content = ({ content }) => {
  if (content === 'popularity') {
    return <PopularFonts />;
  } else if (content === 'trending') {
    return <TrendingFonts />;
  }
  return <RecentFonts />;
};

export default Content;
