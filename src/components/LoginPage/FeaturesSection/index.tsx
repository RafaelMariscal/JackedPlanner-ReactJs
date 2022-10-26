import { BarbellIcon } from "../../../assets/icons/BarbellIcon";
import { CalendarIcon } from "../../../assets/icons/CalendarIcon";
import { CardsIcon } from "../../../assets/icons/CardsIcon";
import { NotesPencilIcon } from "../../../assets/icons/NotesPencilIcon";
import { PresChartIcon } from "../../../assets/icons/PresChartIcon";
import { Button } from "../Button";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <div className="flex items-center justify-around max-w-[1020px] m-auto">
      <div className="max-w-lg pl-4 flex-1 flex flex-col gap-4">
        <h2 className="font-bold text-xl text-gray-800">STANDARD ACCOUNT</h2>
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <FeatureCard.Root>
              <FeatureCard.Icon>
                <CardsIcon />
              </FeatureCard.Icon>
              <FeatureCard.Label>
                <span>3 training splits</span>
              </FeatureCard.Label>
            </FeatureCard.Root>

            <FeatureCard.Root>
              <FeatureCard.Icon>
                <CalendarIcon />
              </FeatureCard.Icon>
              <FeatureCard.Label>
                <span>Sessions Calendar</span>
              </FeatureCard.Label>
            </FeatureCard.Root>

            <FeatureCard.Root>
              <FeatureCard.Icon>
                <BarbellIcon />
              </FeatureCard.Icon>
              <FeatureCard.Label>
                <span>Exercises Description</span>
              </FeatureCard.Label>
            </FeatureCard.Root>
          </div>
          <div className="flex items-center gap-4">
            <FeatureCard.Root>
              <FeatureCard.Icon>
                <PresChartIcon />
              </FeatureCard.Icon>
              <FeatureCard.Label>
                <span>Sessions Calendar</span>
              </FeatureCard.Label>
            </FeatureCard.Root>

            <FeatureCard.Root>
              <FeatureCard.Icon>
                <NotesPencilIcon />
              </FeatureCard.Icon>
              <FeatureCard.Label>
                <span>Exercises Description</span>
              </FeatureCard.Label>
            </FeatureCard.Root>
          </div>
        </div>
        <p className="font-semibold mt-1">
          A propper user expirence for FREE! Use these 5 features and start your Jacked Planner!
        </p>
        <div className="flex items-center justify-center gap-6">
          <Button size="lg" href="#login">
            GET STARTED
          </Button>
          <Button variant="light" size="lg" href="#getPro">
            About PRO
          </Button>
        </div>
      </div>

      <div className="w-full">
        <img src="/src/assets/Snatching.png" alt="" className="m-auto" />
      </div>
    </div>
  )
}
