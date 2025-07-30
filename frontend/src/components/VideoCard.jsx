import { Link } from "react-router-dom";

function VideoCard({ video }) {
    let imageUrl = "";

    if (video.poster_image) {
      imageUrl = video.poster_image.startsWith("http")
        ? video.poster_image
        : `http://localhost:8000${video.poster_image}`;
    }

    return (
      <Link
        to={`/works/${video.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="video-card">
          <div className="video-box">
            <img
              src={imageUrl}
              alt={video.title}
              className="video-thumbnail"
              loading="lazy"
            />
          </div>
          <h2 className="video-title">{video.title}</h2>
          <p className="video-description">{video.description}</p>
        </div>
      </Link>
    );
  }

export default VideoCard;