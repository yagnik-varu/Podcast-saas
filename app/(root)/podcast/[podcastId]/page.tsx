import React from "react";

const PodcastInformation = ({ params }: { params: { podcastId: String } }) => {
  return(
	<p className="text-white-1">Podcastid {params.podcastId}</p>
  );
};

export default PodcastInformation;
