import { GithubLogo } from "../../assets/icons/GithubLogo";
import { InstagramLogo } from "../../assets/icons/InstagramLogo";
import { LinkedinLogo } from "../../assets/icons/LinkedinLogo";

export function ContactLinks() {
  return (
    <div className="flex flex-col gap-3 text-gray-100 font-medium">
      <a href="https://www.instagram.com/rafaelmariscal_/"
        className="flex gap-3 hover:underline underline-offset-4"
      >
        <InstagramLogo className="h-6" />
        @rafaelmarisacal_
      </a>

      <a href="https://www.linkedin.com/in/rafael-mariscal/"
        className="flex gap-3 hover:underline underline-offset-4"
      >
        <LinkedinLogo />
        linkedin.com/in/rafael-mariscal/
      </a>

      <a href="https://github.com/RafaelMariscal"
        className="flex gap-3 hover:underline underline-offset-4"
      >
        <GithubLogo />
        github.com/RafaelMariscal
      </a>
    </div >
  )
}
