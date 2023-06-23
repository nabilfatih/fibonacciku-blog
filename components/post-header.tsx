import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  theme: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, theme, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="text-md md:text-lg lg:text-xl font-bold hidden md:block md:mb-8">
        <span>{theme}</span>
      </div>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="text-md md:text-lg lg:text-xl font-bold block md:hidden mb-6">
          <span>{theme}</span>
        </div>
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
