import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import Page from '@/app/page-contents';

// 定义语言标识变量，默认为 'ch'
const language = 'ch';

// 页面组件
const chPage = () => <Page language={language} />;
chPage.displayName = "chPage";

// 元数据
export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default chPage;
