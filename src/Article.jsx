import React from "react";
import "./Article.css";
import { GrFormNextLink } from "react-icons/gr";

const Article = ({ image, title, author, date, summary, link }) => {
  // Formatting dates
  let newDate = new Date(date);
  let formattedDate = newDate.toUTCString().slice(0, 16);

  return (
    <div className="app__article">
      <div className="app__article-image">
        <a href={link} target="_blank">
          {image ? (
            <img src={image} alt="news image" />
          ) : (
            <img
              src="https://i.inews.co.uk/content/uploads/2022/05/SEI_98342569.jpg"
              alt="alternative image"
            />
          )}
        </a>
      </div>

      <div className="app__article-content">
        <div className="app__article-heading">
          <h4>{title.length <= 60 ? title : `${title.slice(0, 50)}...`}</h4>
        </div>
        <div className="app__article-subheading">
          <p>{author?.length <= 70 ? author : "Unknown Author"}</p>
          <div>
            <i>{formattedDate}</i>
          </div>
        </div>
        <div className="app__article-summary">
          <div className="app__article-summary-content">
            {summary.length <= 305 ? summary : `${summary.slice(0, 310)}...`}

            <div className="app__article-link">
              <a href={link} target="_blank">
                Read More
              </a>
              <GrFormNextLink fontSize={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
