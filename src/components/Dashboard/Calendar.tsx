import { ArrowIcon } from "../../assets/icons/ArrowIcon";
import DashboardCard from "./DashboardCard";

export function Calendar() {
  return (
    <DashboardCard title="Calendar:">
      <div className="w-full max-w-xs h-full min-w-[290px] [&_*]:text-sm ">
        <div className="flex items-center justify-between">
          <p className=" text-gray-100">
            <span>março</span> de <span>2022</span>
          </p>
          <div className="flex gap-4">
            <div className="flex items-center justify-center p-1 rounded cursor-pointer hover:bg-gray-400">
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-75" />
            </div>

            <div className="flex items-center justify-center p-1 rounded cursor-pointer hover:bg-gray-400">
              <ArrowIcon className="[&_path]:stroke-gray-100 scale-75 rotate-180" />
            </div>
          </div>
        </div>

        <div id="weekDays" className="
          flex justify-around font-semibold 
          mt-4 [&_span]:w-full [&_span]:text-orange-500
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span>D</span>
          <span>S</span>
          <span>T</span>
          <span>Q</span>
          <span>Q</span>
          <span>S</span>
          <span>S</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span className="opacity-50">27</span>
          <span className="opacity-50">28</span>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
          <span className="opacity-50">1</span>
          <span className="opacity-50">2</span>
        </div>

        <div id="weekDays" className="
          flex justify-around font-normal 
          mt-3 [&_span]:w-full [&_span]:text-gray-100
          [&_span]:flex [&_span]:items-center [&_span]:justify-center
          "
        >
          <span className="opacity-50">3</span>
          <span className="opacity-50">4</span>
          <span className="opacity-50">5</span>
          <span className="opacity-50">6</span>
          <span className="opacity-50">7</span>
          <span className="opacity-50">8</span>
          <span className="opacity-50">9</span>
        </div>
      </div>

    </DashboardCard>
  )
}
