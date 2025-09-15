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
          <CardTitle className="text-xs flex justify-between items-center">
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

      <CardDescription className="font-mono tags-print text-xs hidden print:block">
        {/* 打印时链接部分显示 */}
        <div>{language === 'zh' ? '项目链接：' : 'Link:'} <a
          href={link}
          target="_blank"
          className="inline-flex items-center gap-1 hover:underline"
        >{link}</a></div>
        {/* 打印时标签部分显示 */}
        <p>{language === 'zh' ? '应用技术：' : 'Tags:'} {tags.join("、")}</p>
      </CardDescription>

      <CardContent className="mt-0 font-mono text-xs">
        {/* 项目描述 */}
        <div>{language === 'zh' ? '项目描述：' : 'Description:'} {description}</div>

        {/* 主要工作 */}
        <div>
          {mainTasks.length > 0 && (
            <div className="font-mono flex items-start text-xs">
              <div className="mt-0 mr-0 flex-shrink-0">
                {language === 'zh' ? '主要工作：' : 'Tasks:'}
              </div>
              <ol className="list-decimal pl-5">
                {renderMainTasks}
              </ol>
            </div>
          )}
        </div>

        {/* 项目成果 */}
        <div>{achievements && (
          <div className="font-mono text-xs mt-0">
            {language === 'zh' ? '项目成果：' : 'Achievements:'} {achievements}
          </div>
        )}</div>

        {/* 个人收获 */}
        <div>
          {personalGains && (
            <div className="font-mono text-xs mt-0">
              {language === 'zh' ? '个人收获：' : 'Gains:'} {personalGains}
            </div>
          )}
        </div>
      </CardContent>

    </Card>
  );
}
