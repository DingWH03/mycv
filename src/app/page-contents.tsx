import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA, RESUME_DATA_en } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

interface PageProps {
  language: 'zh' | 'en';
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillsByCategory {
  [key: string]: Skill[];
}

// 计算年龄的函数
export const getAge = (birthDate: string | number | Date) => {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const isBeforeBirthdayThisYear =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate());
  if (isBeforeBirthdayThisYear) {
    age--;
  }
  return age;
};

export default function Page({ language }: PageProps) {
  // 根据语言选择数据
  const data = language === 'zh' ? RESUME_DATA : RESUME_DATA_en;

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-8">
      <section className="mx-auto w-full max-w-3xl space-y-4 bg-white print:space-y-2">
        <div className="relative flex items-center">
          {/* 左侧信息块 */}
          <div className="flex-1 flex flex-col space-y-2">
            {/* Name + Target */}
            <h1 className="text-3xl font-bold">
              {data.name}
              {data.target && (
                <span className="ml-6 font-mono text-base font-medium ">
                  {language === 'zh' ? '意向岗位' : 'Target'}：{data.target}
                </span>
              )}
            </h1>

            {/* Combined Basic Info & Location */}
            <p className="flex flex-wrap space-x-2 font-mono text-sm text-muted-foreground">
              {data.location && (
                <>
                  <a
                    className="inline-flex gap-x-1 hover:underline"
                    href={data.locationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <GlobeIcon className="size-4" /> */}
                    {data.location}
                  </a>
                </>
              )}
              <span>|</span>
              <span>{data.birthDate}({getAge(data.birthDate)})</span>
              <span>|</span>
              <span>{data.gender}</span>
              <span>|</span>
              <span>{data.top_education}</span>
            </p>

            {/* Contact Icons */}
            <div className="flex gap-x-1 print:hidden">
              {data.contact.email && (
                <Button className="h-6 w-6 p-0" variant="outline" asChild>
                  <a href={`mailto:${data.contact.email}`}>
                    <MailIcon className="size-3" />
                  </a>
                </Button>
              )}
              {data.contact.tel && (
                <Button className="h-6 w-6 p-0" variant="outline" asChild>
                  <a href={`tel:${data.contact.tel}`}>
                    <PhoneIcon className="size-3" />
                  </a>
                </Button>
              )}
              {data.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="h-6 w-6 p-0"
                  variant="outline"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <social.icon className="size-3" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Contact Details for Print */}
            <div className="hidden print:flex space-x-4 font-mono text-sm text-muted-foreground">
              {data.contact.tel && (
                <a href={`tel:${data.contact.tel}`} className="underline">
                  {data.contact.tel}
                </a>
              )}
              {data.contact.email && (
                <a href={`mailto:${data.contact.email}`} className="underline">
                  {data.contact.email}
                </a>
              )}
              {data.contact.github && (
                <a href={`${data.contact.github}`} className="underline">
                  {data.contact.github}
                </a>
              )}
            </div>
          </div>

          {/* 右侧头像，独立布局 */}
          <div className="absolute right-0 top-0">
            <Avatar className="size-28">
              <AvatarImage alt={data.name} src={data.avatarUrl} />
              <AvatarFallback>{data.initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* 个人简介部分，目前省略 */}
        {/* <Section>
          <h2 className="text-lg font-bold">
            {language === 'zh' ? '个人简介' : 'Personal Profile'}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {data.summary}
          </p>
        </Section> */}

        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'zh' ? '教育经历' : 'Education'}
          </h2>
          {data.education.map((edu) => (
            <Card key={edu.school + edu.start}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-sm">
                  {/* 学校–专业–学位 */}
                  <div className="flex items-baseline space-x-1">
                    <span>{edu.school}</span>
                    <span>-</span>
                    <span>{edu.major}</span>
                    <span>-</span>
                    <span>{edu.degree}</span>
                  </div>
                  {/* 时间 */}
                  <div className="tabular-nums text-gray-500">
                    {edu.start} – {edu.end}
                  </div>
                </div>
              </CardHeader>

              {/* 第二行：描述 */}
              {edu.description && (
                <CardContent className="mt-1 text-xs text-gray-600">
                  {edu.description}
                </CardContent>
              )}
            </Card>
          ))}
        </Section>




        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'zh' ? "技能与证书" : "Skills and Certifications"}
          </h2>

          <div className="mt-0 space-y-1">
            {data.skills.map((skillCategory, index) => (
              <div key={index}>
                <h3 className="text-xs font-semibold">{skillCategory.category}</h3>
                <ul className="list-disc list-inside text-xs font-light text-black space-y-0.5">
                  {skillCategory.items.map((skill, idx) => (
                    <li key={idx}>
                      {skill.name} {skill.level && `: ${skill.level}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}


            {/* Certifications Section */}
            <div className="mt-0">
              <h3 className="text-xs font-semibold">
                {language === 'zh' ? "证书" : "Certifications"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.certifications.map((cert, index) => (
                  <div key={index}>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-2 py-1 text-xs font-medium text-black"
                        title={`${language === 'zh' ? "颁发机构：" : "Issuer:"} ${cert.issuer} (${cert.date})`}
                      >
                        {cert.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 在这里控制打印时强制换行print-force-new-page */}
        <Section className="scroll-mb-16 print:page-break-inside-avoid">
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'zh' ? '个人项目' : 'Personal Projects'}
          </h2>
          <div className="-mx-3 grid text-xs grid-cols-1 gap-2 print:mx-0 print:gap-0 md:grid-cols-1 lg:grid-cols-1">
            {data.projects.map((project, index) => {
              return (
                <ProjectCard
                  key={project.title}
                  order={index + 1} // 自动生成序号，index从0开始，所以加1
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  personalGains={project.gains}
                  mainTasks={project.tasks ? [...project.tasks] : undefined}
                  achievements={project.achievements}
                  link={"link" in project ? project.link.href : undefined}
                  language={language}
                />
              );
            })}
          </div>
        </Section>

        {/* 仅在 data.work 存在且不为空时渲染整个 Section */}
        {data.work && data.work.length > 0 && (
          <Section className="print:page-break-inside-avoid">
            <h2 className="text-base font-bold border-b border-gray-300">
              {language === 'zh' ? '工作经历' : 'Work Experience'}
            </h2>
            {data.work.map((work) => {
              return (
                <Card key={work.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-sm">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={work.link}>
                          {work.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {work.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-xs tabular-nums text-gray-500">
                        {work.start} - {work.end ?? "Present"}
                      </div>
                    </div>

                    <h4 className="font-mono text-xs leading-none">
                      {work.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-1 text-xs">
                    {work.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
        )}

        {/* 仅在 data.work 存在且不为空时渲染整个 Section */}
        {data.internship && data.internship.length > 0 && (
          <Section className="print:page-break-inside-avoid">
            <h2 className="text-base font-bold border-b border-gray-300">
              {language === 'zh' ? '实习经历' : 'Internship Experience'}
            </h2>
            {data.internship.map((internship) => {
              return (
                <Card key={internship.company}>
                  <CardHeader>
                    <div className="flex items-center justify-between gap-x-2 text-sm">
                      <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                        <a className="hover:underline" href={internship.link}>
                          {internship.company}
                        </a>
                        <span className="inline-flex gap-x-1">
                          {internship.badges.map((badge) => (
                            <Badge
                              variant="secondary"
                              className="align-middle text-xs"
                              key={badge}
                            >
                              {badge}
                            </Badge>
                          ))}
                        </span>
                      </h3>
                      <div className="text-xs tabular-nums text-gray-500">
                        {internship.start} - {internship.end ?? "Present"}
                      </div>
                    </div>

                    <h4 className="font-mono text-xs leading-none">
                      {internship.title}
                    </h4>
                  </CardHeader>
                  <CardContent className="mt-1 text-xs">
                    {internship.description}
                  </CardContent>
                </Card>
              );
            })}
          </Section>
        )}



        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'zh' ? '在校经历' : 'Campus Activities'}
          </h2>
          {data.campusActivities.map((activity) => {
            return (
              <Card key={activity.organization}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-sm">
                    <h3 className="font-semibold leading-none">
                      {activity.organization}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {activity.start} - {activity.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-xs leading-none">{activity.position}</h4>
                  {activity.department && (
                    <h5 className="text-xs leading-none text-gray-500">{activity.department}</h5>
                  )}
                  {activity.topic && (
                    <h5 className="text-xs leading-none text-gray-500">{activity.topic}</h5>
                  )}
                </CardHeader>
                <CardContent className="mt-1 text-xs">{activity.description}</CardContent>
              </Card>
            );
          })}
        </Section>
      </section>




      <CommandMenu
        links={[
          {
            url: data.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...data.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
        language={language}
      />
    </main>
  );
}
