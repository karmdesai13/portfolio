import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const isExternal = (url = "") => /^https?:\/\//i.test(url);

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const router = useRouter();

  const goToPreview = useCallback(() => {
    if (!previewUrl) return;
    router.push(previewUrl);
  }, [router, previewUrl]);

  const onKeyActivate = (e) => {
    if (!previewUrl) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      router.push(previewUrl);
    }
  };

  const stop = (e) => e.stopPropagation();

  return (
    <div
      className="group relative rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent p-[1px] transition-transform duration-300 hover:-translate-y-1 hover:[transform:perspective(900px)_rotateX(1deg)_rotateY(-1deg)] focus-within:-translate-y-1 focus-within:[transform:perspective(900px)_rotateX(1deg)_rotateY(-1deg)]"
      onClick={goToPreview}
      onKeyDown={onKeyActivate}
      role={previewUrl ? "link" : undefined}
      tabIndex={previewUrl ? 0 : undefined}
      aria-label={previewUrl ? `Open preview: ${title}` : undefined}
    >
      
      <div className="rounded-2xl bg-[#0f0f10]">
      
        <div
          className="relative h-52 w-full overflow-hidden rounded-t-2xl md:h-72"
          style={{ background: `url(${imgUrl}) center/cover no-repeat` }}
        >
          
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

         
          <div className="absolute inset-0 hidden items-center justify-center gap-3 bg-black/0 transition-all duration-500 group-hover:flex group-hover:bg-black/60">
            {gitUrl && (
              <Link
                href={gitUrl}
                target={isExternal(gitUrl) ? "_blank" : undefined}
                rel={isExternal(gitUrl) ? "noreferrer noopener" : undefined}
                className="group/action relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Open Git repository"
                onClick={stop}
              >
                <CodeBracketIcon className="h-7 w-7 text-white/80 group-hover/action:text-white" />
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                target={isExternal(previewUrl) ? "_blank" : undefined}
                rel={isExternal(previewUrl) ? "noreferrer noopener" : undefined}
                className="group/action relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur hover:border-white hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Open live preview"
                onClick={stop}
              >
                <EyeIcon className="h-7 w-7 text-white/80 group-hover/action:text-white" />
              </Link>
            )}
          </div>
        </div>

        
        <div className="rounded-b-2xl px-5 py-5">
          <h5 className="mb-1 text-lg font-semibold text-white">{title}</h5>
          <p className="text-sm leading-relaxed text-[#ADB7BE]">{description}</p>

          
          <div className="mt-4 flex gap-3 md:hidden" onClick={stop}>
            {gitUrl && (
              <Link
                href={gitUrl}
                target={isExternal(gitUrl) ? "_blank" : undefined}
                rel={isExternal(gitUrl) ? "noreferrer noopener" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <CodeBracketIcon className="h-5 w-5" />
                Code
              </Link>
            )}
            {previewUrl && (
              <Link
                href={previewUrl}
                target={isExternal(previewUrl) ? "_blank" : undefined}
                rel={isExternal(previewUrl) ? "noreferrer noopener" : undefined}
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <EyeIcon className="h-5 w-5" />
                Preview
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
