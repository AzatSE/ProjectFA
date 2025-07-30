import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './videoplayerpage.css';

function VideoPlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);





  useEffect(() => {
    // Загружаем данные видео по id
    fetch(`http://localhost:8000/api/videos/${id}/`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch video");
        return res.json();
      })
      .then((data) => {
        setVideo(data);
        setLoading(false);
        setFadeIn(true);  // запускаем анимацию после загрузки
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;

  if (!video) return <div>Video not found</div>;

  return (
    <div className={`MainPlayerbox ${fadeIn ? "fade-in" : ""}`}>
      <video
        className="Videoplayer"
        src={video.video_file}
        poster={video.poster_image}
        controls
        autoPlay
        style={{ width: "100%", borderRadius: 8, background: "black" }}
      />
      <h1 className="Player_title">{video.title}</h1>
      <p className="Player_description">{video.description}</p>
    </div>
  );
}

export default VideoPlayerPage;