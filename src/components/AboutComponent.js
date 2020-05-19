import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderLeader(props) {
  return (
    <Media>
      <Media left middle href="#">
        <Media object src={props.leader.image} alt={props.leader.name} />
      </Media>
      <Media body className="pl-5">
        <Media heading>{props.leader.name}</Media>
        <p>{props.leader.designation}</p>
        <p>{props.leader.description}</p>
      </Media>
    </Media>
  );
}

function About(props) {
  const leaders = props.leaders.map((leader, i) => {
    return <RenderLeader key={i} leader={leader}></RenderLeader>;
  });

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Me</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>My Experience</h2>
          <p>
            Started in 2013, .
          </p>
          <p>
            As a Teaching Asst and 2015 as a Asst professor 2016 as Web Developer
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">SSC</dt>
                <dd className="col-6">2016</dd>
                <dt className="col-6">Inter</dt>
                <dd className="col-6">2018</dd>
                <dt className="col-6">UG</dt>
                <dd className="col-6">2012</dd>
                <dt className="col-6">PG</dt>
                <dd className="col-6">2014</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better work smarter.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    A smart way of working
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2 className="text-left">Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <Media list>{leaders}</Media>
        </div>
      </div>
    </div>
  );
}

export default About;
