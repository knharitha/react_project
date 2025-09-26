import React from "react";
import jobs from "../data/jobs";
import { useParams, Link } from "react-router-dom";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === parseInt(id, 10));

  if (!job) {
    return <p className="text-center mt-5">No job found</p>;
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg p-4 border-0">
        {/* Title & Badges */}
        <h2 className="fw-bold mb-3">
          {job.title}{" "}
          <span className="badge bg-primary ms-2 " style={{fontSize:'15px'}}>{job.type}</span>
          <span className="badge bg-success ms-2"style={{fontSize:'15px'}}>{job.salary}</span>
        </h2>

        {/* Company & Location */}
        <p className="text-muted mb-2">
          <strong>{job.company}</strong> | {job.location}
        </p>

        {/* Posted date */}
        <p className="text-secondary small mb-4">
          <i className="bi bi-calendar-date me-2"></i>
          Posted on: {job.posted}
        </p>

        {/* Description */}
        <p className="lead">{job.description}</p>

        {/* Requirements */}
        <h4 className="mt-4 mb-3">Requirements</h4>
        <ul className="list-group mb-4">
          {job.requirements.map((req, idx) => (
            <li key={idx} className="list-group-item">
              {req}
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="d-flex justify-content-between">
          <Link to="/" className="btn btn-outline-secondary">
            ← Back to Listings
          </Link>
          <p>Send you resume to the email:<p className='text-primary'>{job.email}</p></p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
