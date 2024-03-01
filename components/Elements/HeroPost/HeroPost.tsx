import Link from "next/link";
import { Avatar, Date, CoverImage } from '@/components/Elements'

export const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <section>
      <div>
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Link
            href={`/posts/${slug}`}
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></Link>
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <Date dateString={date} />
        </div>
      </div>
      <div>
        <div
          className="text-lg leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Avatar author={author} />
      </div>
    </section>
  );
}
