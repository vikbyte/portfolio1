import React, { useState, useEffect } from "react";
import contentData from "../content.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork, faStar } from "@fortawesome/free-solid-svg-icons";

// async function fetchRepoData(repoApiLink) {
//   const response = await fetch(repoApiLink);
//   const data = await response.json();
//   return data;
// }

const Footer = () => {
  const general = contentData.general;
  const repoLink = contentData.repo_stats.repo_link;
  const repoApiLink = contentData.repo_stats.api_link;

  const iconStyle = {
    fontSize: "0.8rem", // Adjust the size as needed
    marginRight: "1.2rem", // Add space between icon and text
  };

  // const [repoData, setRepoData] = useState(null);

  // useEffect(() => {
  //   fetchRepoData(repoApiLink).then((data) => {
  //     setRepoData(data);
  //   });
  // }, [repoApiLink]);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="copyright-box">
              <p className="copyright">
                <a href="https://github.com/KevinTrinh1227">
                  <strong>
                    {general.first_name} {general.last_name}
                  </strong>
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
