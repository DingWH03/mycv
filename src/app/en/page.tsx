import { Metadata } from "next";
import { RESUME_DATA_en } from "@/data/resume-data";
import Page from '@/app/page-contents';

// 定义语言标识变量，默认为 'en'
let language = 'en';

// 组件的显示名称
const enPage = () => <Page language={language} />;
enPage.displayName = "MyCV_en";

export const metadata: Metadata = {
  title: `${RESUME_DATA_en.name} | ${RESUME_DATA_en.about}`,
  description: RESUME_DATA_en.summary,
};

export default enPage;