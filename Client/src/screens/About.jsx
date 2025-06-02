import React from 'react';
// Adjust the path as necessary

const About = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-no-repeat bg-right-top flex items-center px-8 py-16"
      style={{
        backgroundImage: "url('/assets/AboutBG.png')",
      }}
    >
      <div className="max-w-[40rem] text-left text-black px-4 md:px-12 lg:px-12 mx-auto -ml-4">
        <p className="text-lg leading-relaxed">
         <br /> ShelfWise is a digital platform that makes reading simpler, smarter, and more flexible. It is built for readers who want the freedom to explore and enjoy books without being tied to physical copies or fixed schedules.
          <br />
          You no longer need to carry heavy books or find time to visit a library. With ShelfWise, your entire reading space is always with you. You can read at your own pace, in your own space, and on your own terms, whether you're on the couch, in a coffee shop, or relaxing before bed.
          <br />
          On ShelfWise, you can engage in meaningful discussions, see what others think about a book before you start reading, and take suggestions from readers who share your interests. It is a space to explore perspectives, discover new titles, and connect through ideas.
          <br />
          You can also post your own thoughts, share reactions, or reflect on what a story meant to you. Whether it is a quick note or a detailed review, your voice helps shape the community.
          <br />
          ShelfWise supports a wide range of genres and reading styles and works seamlessly across devices. It is not just about reading. It is about discovering, sharing, and enjoying books in a way that fits your lifestyle.
          <br />
        </p>
      </div>
    </div>
  );
};

export default About;
