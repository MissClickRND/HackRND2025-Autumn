import { FloatingIndicator, Tabs } from "@mantine/core";
import { useState } from "react";
import classes from "../../classes/Slidebar.module.css";
import AllInfoSection from "./components/AllInfo.section";
import RevenueSection from "./components/Revenue.section";
import ExpensesSection from "./components/ExpensesSection";
import Additionally from "./components/Additionally.section";

export default function EditProjects({ form }: { form: any }) {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("allInfo");
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <>
      <Tabs variant="none" value={value} onChange={setValue}>
        <Tabs.List ref={setRootRef} className={classes.list}>
          <Tabs.Tab
            value="allInfo"
            ref={setControlRef("allInfo")}
            className={classes.tab}
          >
            Общая информация
          </Tabs.Tab>
          <Tabs.Tab
            value="revenue"
            ref={setControlRef("revenue")}
            className={classes.tab}
          >
            Выручка
          </Tabs.Tab>
          <Tabs.Tab
            value="expenses"
            ref={setControlRef("expenses")}
            className={classes.tab}
          >
            Затраты
          </Tabs.Tab>
          <Tabs.Tab
            value="additionally"
            ref={setControlRef("additionally")}
            className={classes.tab}
          >
            Дополнительно
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <Tabs.Panel value="allInfo">
          <AllInfoSection form={form} />
        </Tabs.Panel>
        <Tabs.Panel value="revenue">
          <RevenueSection form={form} />
        </Tabs.Panel>
        <Tabs.Panel value="expenses">
          <ExpensesSection form={form} />
        </Tabs.Panel>
        <Tabs.Panel value="additionally">
          <Additionally form={form} />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}
