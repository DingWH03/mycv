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
  language: string;
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
  const data = language === 'ch' ? RESUME_DATA : RESUME_DATA_en;

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-0 md:p-16">
      <section className="mx-auto w-full max-w-3xl space-y-4 bg-white print:space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-lg font-bold">{data.name}</h1>
            {/* <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {data.about}
            </p> */}
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              <span>{getAge(data.birthDate)}</span>
              <span className="mx-2">|</span>
              <span>{data.gender}</span>
              <span className="mx-2">|</span>
              <span>{data.top_education}</span>
            </p>

            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={data.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {data.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {data.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${data.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${data.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {data.contact.email ? (
                <a href={`mailto:${data.contact.email}`}>
                  <span className="underline">{data.contact.email}</span>
                </a>
              ) : null}
              {data.contact.tel ? (
                <a href={`tel:${data.contact.tel}`}>
                  <span className="underline">{data.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={data.name} src={data.avatarUrl} />
            <AvatarFallback>{data.initials}</AvatarFallback>
          </Avatar>
        </div>
        {/* 个人简介部分，目前省略 */}
        {/* <Section>
          <h2 className="text-lg font-bold">
            {language === 'ch' ? '个人简介' : 'Personal Profile'}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {data.summary}
          </p>
        </Section> */}

        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'ch' ? '教育经历' : 'Education'}
          </h2>
          {data.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-sm">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-1 text-xs">{education.major}{<span className="mx-1">|</span>}{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>


        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'ch' ? "技能与证书" : "Skills and Certifications"}
          </h2>

          <div className="mt-0 space-y-1">
            {data.skills.map((skillCategory, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold">{skillCategory.category}</h3>
                <div className="flex flex-col gap-2">
                  {skillCategory.items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-1 py-0 text-xs font-medium text-black"
                    >
                      · {skill.name} {skill.level && `: ${skill.level}`}
                    </span>
                  ))}
                </div>
              </div>
            ))}


            {/* Certifications Section */}
            <div className="mt-0">
              <h3 className="text-sm font-semibold">
                {language === 'ch' ? "证书" : "Certifications"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.certifications.map((cert, index) => (
                  <div key={index}>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="px-2 py-1 text-sm font-medium text-black"
                        title={`${language === 'ch' ? "颁发机构：" : "Issuer:"} ${cert.issuer} (${cert.date})`}
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
        <Section className="scroll-mb-16">
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'ch' ? '个人项目' : 'Personal Projects'}
          </h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {data.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>

        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'ch' ? '工作经历' : 'Work Experience'}
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


        <Section>
          <h2 className="text-base font-bold border-b border-gray-300">
            {language === 'ch' ? '在校经历' : 'Campus Activities'}
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
