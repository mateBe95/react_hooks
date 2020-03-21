
import FirstContent from "./components/FirstContent/FirstContent";
import SecondContent from "./components/SecondContent/SecondContent";
import ThirdContent from "./components/ThirdContent/ThirdContent";


export const routes: any = [
    {
      path: "/",
      exact: true,
      component: FirstContent 
    },
    {
      path: "/secondContent",
      component: SecondContent
    },
    {
      path: "/thirdContent",
      component: ThirdContent
    }
  ];