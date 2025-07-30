

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const front = [
    { path: "/front/html.png", name: "HTML5" },
    { path: "/front/css.png", name: "CSS3" },
    { path: "/front/javascript.png", name: "JavaScript" },
    { path: "/front/react.png", name: "React" },
    { path: "/front/tailwindcss.png", name: "Tailwind CSS" },
      { path: "/front/figma.png", name: "Figma" },
    // { path: "/front/nextjs.png", name: "Next.js" },
    { path: "/front/nodejs.png", name: "Node.js" },
  ];

  const back = [
    { path: "/back/express.png", name: "Express" },
    { path: "/back/mongodb.png", name: "MongoDB" },
    { path: "/back/mysql.png", name: "MySQL" },
    { path: "/back/postgresql.png", name: "PostgreSQL" },
    // { path: "/back/redis.png", name: "Redis" },
    // { path: "/back/websocket.png", name: "WebSocket" },
  ];

  const devops = [
    // { path: "/devops/aws.png", name: "AWS" },
    // { path: "/devops/cloudflare.png", name: "Cloudflare" },
    // { path: "/devops/docker.png", name: "Docker" },
    { path: "/devops/github.png", name: "GitHub" },
    { path: "/devops/java.png", name: "Java" },
    // { path: "/devops/python.png", name: "Python" },
  ];

  const renderRow = (data, reverse = false) => (
    <div className="flex overflow-hidden MyGrad">
      <motion.div
        initial={{ x: reverse ? '-100%' : 0 }}
        animate={{ x: reverse ? 0 : '-100%' }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0"
      >
        {data.map((img, i) => (
          <img
            key={i}
            src={img.path}
            alt={img.name}
            title={img.name}
            className="size-16 mr-20 ms-10"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: reverse ? '-100%' : 0 }}
        animate={{ x: reverse ? 0 : '-100%' }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-shrink-0"
      >
        {data.map((img, i) => (
          <img
            key={i}
            src={img.path}
            alt={img.name}
            title={img.name}
            className="size-16 mr-20 ms-10"
          />
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="container mx-auto flex flex-col gap-10 py-10">
      {/* Frontend Skills */}
      {renderRow(front)}

      {/* Backend Skills */}
      {renderRow(back, true)}

      {/* DevOps Skills */}
      {renderRow(devops)}
    </div>
  );
};

export default Skills;
