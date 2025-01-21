import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Franklin",
  lastName: "Mazon Jr.",
  get name() {
    return `${this.firstName}`;
  },
  role: "Front End Developer ",
  avatar: "/images/Behance.jpg",
  location: "Asia/Philippines", // Expecting the PH time zone identifier, e.g., 'Asia/Philippines'
  languages: ["English", "Tagalog"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and Development
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/frankmazon",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/franklin-mazon-9a6883137/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mazonjr30@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Front-End Developer</>,
  subline: (
    <>
      Hey there! I'm Franklin, a Front-End Developer at
      <InlineCode>GH Web Development Solutions</InlineCode> bringing ideas to
      life with clean, " <br />
      efficient code and stunning designssssss.{" "}
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Franklin with a background in front-end
        development, graphic design, data entry, and computer technology. With a
        passion for creating visually appealing and efficient solutions,
        combines technical expertise with creativity to excel in data encoding,
        interactive design, and tech-driven problem-solving.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Gh Web Development Solutions",
        timeframe: "2024 - Present",
        role: "Front-End Developer",
        achievements: [
          <>
            Improved the UI/UX of the website platform, leading to better user
            interface
          </>,
          <>
            Introduced AI tools into design workflows, making the iteration
            process significantly more efficient.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/sample-01.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Office Beacon",
        timeframe: "October 28, 2019 – Feb 28, 2020",
        role: "Graphics Artist",
        achievements: [
          <>
            Created design assets that maintained brand consistency across
            platforms.
          </>,
          <>
            Contributed to the successful launch of a new product line by
            designing visuals and marketing materials.
          </>,
        ],
        images: [],
      },
      {
        company: "S-CORP PHILIPPINES INC",
        timeframe: "May 7, 2018 - August 17,2019",
        role: "Medical Encoder",
        achievements: [
          <>
            Organized and maintained accurate records by streamlining data entry
            processes across multiple platforms.
          </>,
          <>
            Collaborated with teams to ensure timely and efficient encoding of
            critical information, improving overall workflow.
          </>,
        ],
        images: [],
      },
      {
        company: "Pure Gold Subic Bay",
        timeframe: "May 17, 2021 – Feb 16, 2022",
        role: "Visual Artist",
        achievements: [
          <>
            Designed price tags and promotional banners for the store, ensuring
            clear and appealing visuals.
          </>,
          <>
            Collaborated with the marketing team to create consistent designs
            that aligned with the store's branding.
          </>,
        ],
        images: [],
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Accomplishment And Certification",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lyceum Of Subic Bay",
        description: <>Studied Bachelor Science Information technology</>,
      },
      {
        name: "Bawanta National High School",
        description: <></>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Accomplishment",
    skills: [
      {
        title: "Computer Literacy Program ",
        description: (
          <>July 8, 2012 AMAA Vocational Certificate </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
         
        ],
      },
      {
        title: "TESDA NCII / TESDA NCII",
        description: (
          <>October 23, 2015 Visual Graphics Design / Computer System Servicing NC II </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
