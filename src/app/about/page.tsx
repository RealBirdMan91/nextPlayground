import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("https://www.reddit.com/.json");
  const data = await res.json();
  return data;
};

async function About() {
  const data = await getData();
  const post = data.data.children[0].data;
  return (
    <div>
      <h1>About</h1>
      {post.title}
      {post.selftext}
      {post.author}
      {post.created_utc}
      {post.num_comments}
      {post.score}
      {post.subreddit_name_prefixed}
      {post.subreddit_type}
      {post.subreddit}
      {post.subreddit_id}
      <Link href="/">Home</Link>
    </div>
  );
}

export default About;
