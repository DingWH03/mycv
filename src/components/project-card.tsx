import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import styles from './project-card.module.css';

interface Props {
  order: number;
  title?: string;
  description: string;
  tags: readonly string[];
  link?: string;
  language?: 'zh' | 'en';
  mainTasks?: string[]; // 主要工作
  achievements?: string; // 项目成果
  personalGains?: string; // 个人收获
}

export function ProjectCard({
  order,
  title,
  description,
  tags,
  link,
  language = 'en',
  mainTasks = [],
  achievements,
  personalGains
}: Props) {
  const renderMainTasks = mainTasks.map((task, index) => <li key={index}>{task}</li>);

  return (
    <Card className={`flex flex-col overflow-hidden border border-muted p-1 ${styles['print-no-border']} ${styles['print-tight']} print:p-0`}>
      <CardHeader>
        <div className="space-y-2">
          {/* 项目标题和序号 */}
          <CardTitle className="text-sm flex justify-between items-center">
            <div className="mr-1 text-base">({order})</div>
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
            <div className="tags-section ml-auto flex gap-1">
              {/* 网页内标签部分显示 */}
              <div className="print:hidden">{tags.map((tag) => (
                <Badge
                  className="px-1 py-0 text-[10px]"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}</div>
            </div>
          </CardTitle>

          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>

        </div>
      </CardHeader>

      <CardDescription className="font-mono tags-print text-sm hidden print:block">
        {/* 打印时链接部分显示 */}
        <p>{language === 'zh' ? '项目链接：' : 'Link:'} <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >{link}</a></p>
        {/* 打印时标签部分显示 */}
        <p>{language === 'zh' ? '应用技术：' : 'Tags:'} {tags.join("、")}</p>
      </CardDescription>

      <CardContent className="mt-auto flex">
        {/* 项目描述 */}
        {language === 'zh' ? '项目描述：' : 'Description:'} {description}
        {/* 主要工作 */}
        {mainTasks.length > 0 && (
          <>
            <div className="font-mono text-xs">
              {language === 'zh' ? '主要工作：' : 'Tasks:'}
            </div>
            <ul className="font-mono text-xs list-disc pl-5">
              {renderMainTasks}
            </ul>
          </>
        )}

        {/* 项目成果 */}
        {achievements && (
          <div className="font-mono text-xs mt-2">
            {language === 'zh' ? '项目成果：' : 'Achievements:'} {achievements}
          </div>
        )}

        {/* 个人收获 */}
        {personalGains && (
          <div className="font-mono text-xs mt-2">
            {language === 'zh' ? '个人收获：' : 'Gains:'} {personalGains}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
