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

export default function Page({ language }: PageProps) {
  // 根据语言选择数据
  const data = language === 'ch' ? RESUME_DATA : RESUME_DATA_en;

  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {data.about}
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
        <Section>
          <h2 className="text-xl font-bold">
            {language === 'ch' ? '个人简介' : 'Personal Profile'}
          </h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {data.summary}
          </p>
        </Section>
        <Section>
  <h2 className="text-xl font-bold">
    {language === 'ch' ? '个人技能' : 'Personal Skills'}
  </h2>
  <div className="grid grid-cols-2 gap-4">
    {Object.entries(data.skills.reduce<SkillsByCategory>((acc, skill) => {
      // Group skills by category
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    }, {})).map(([category, skills]) => (
      <div key={category} className="col-span-1">
        <h3 className="font-semibold">{category}</h3>
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 mb-2">
            {/* 设置技能名称的固定宽度 */}
            <span className="w-1/4 text-left" style={{ minWidth: '80px' }}>
              {skill.name}
            </span>
            <div className="relative w-3/4">
              <div className="w-full bg-gray-200 rounded-full h-2.5 relative flex items-center">
                <div
                  className="bg-blue-400 h-2.5 rounded-full flex items-center justify-center"
                  style={{ width: `${skill.level}%` }}
                >
                  {/* 增大字体并上下居中对齐 */}
                  <span
                    className="absolute text-lg text-black"
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                      lineHeight: '1.5rem', // 确保文本上下居中
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    ))}
  </div>
</Section>






        <Section>
          <h2 className="text-xl font-bold">
            {language === 'ch' ? '个人技能证书' : 'Personal Certifications'}
          </h2>
          <div className="flex flex-col gap-2">
            {data.certifications.map((certification) => {
              return (
                <div key={certification.name} className="flex items-center justify-between gap-2">
                  <span className="w-1/2 font-semibold">{certification.name}</span>
                  <span className="text-sm text-gray-500">{certification.issuer}</span>
                  <span className="text-sm tabular-nums text-gray-500">{certification.date}</span>
                </div>
              );
            })}
          </div>
        </Section>
        {/* 在这里控制打印时强制换行 */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">
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
          <h2 className="text-xl font-bold">
            {language === 'ch' ? '教育经历' : 'Education'}
          </h2>
          {data.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>

        <Section>
          <h2 className="text-xl font-bold">
            {language === 'ch' ? '在校经历' : 'Campus Activities'}
          </h2>
          {data.campusActivities.map((activity) => {
            return (
              <Card key={activity.organization}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {activity.organization}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {activity.start} - {activity.end}
                    </div>
                  </div>
                  <h4 className="font-mono text-sm leading-none">{activity.position}</h4>
                  {activity.department && (
                    <h5 className="text-sm leading-none text-gray-500">{activity.department}</h5>
                  )}
                  {activity.topic && (
                    <h5 className="text-sm leading-none text-gray-500">{activity.topic}</h5>
                  )}
                </CardHeader>
                <CardContent className="mt-2 text-xs">{activity.description}</CardContent>
              </Card>
            );
          })}
        </Section>



        <Section>
          <h2 className="text-xl font-bold">
            {language === 'ch' ? '工作经历' : 'Work Experience'}
          </h2>
          {data.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
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
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs">
                  {work.description}
                </CardContent>
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
