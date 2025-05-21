import { Button } from "@/components/ui/button";
import { useAppNavigation } from "@/routes/navigation";

const About = () => {
  const navigation = useAppNavigation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-6">
          <span className="gradient-text">关于我们</span>
        </h1>
        <p className="text-xl text-homywork-gray mb-8">
          Homywork是一个领先的AI辅助工具，帮助您简化产品列表创建过程。
          我们的使命是让商家能够更快速、更有效地增长他们的业务。
        </p>
        <Button 
          onClick={navigation.goToHome}
          className="bg-homywork-purple hover:bg-homywork-purple/90 text-white"
        >
          返回首页
        </Button>
      </div>
    </div>
  );
};

export default About; 