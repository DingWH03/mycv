import { Metadata } from "next";
import { RESUME_DATA_en } from "@/data/resume-data_en";

import Page from '@/app/page-contents';

// 定义语言标识变量，默认为 'en'
let language = 'en';

export const metadata: Metadata = {
  title: `${RESUME_DATA_en.name} | ${RESUME_DATA_en.about}`,
  description: RESUME_DATA_en.summary,
};

export default () => <Page language={language} />;