import { Box, FloatingIndicator, Tabs } from "@mantine/core";
import { useState } from "react";
import classes from "./classes/Slidebar.module.css";

export default function AdminPanel() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>("users");
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
  return (
    <Box px={50} py={25}>
      <Tabs variant="none" value={value} onChange={setValue}>
        <Tabs.List ref={setRootRef} className={classes.list}>
          <Tabs.Tab
            value="users"
            ref={setControlRef("users")}
            className={classes.tab}
          >
            Пользователи
          </Tabs.Tab>
          <Tabs.Tab
            value="backups"
            ref={setControlRef("backups")}
            className={classes.tab}
          >
            Бэкапы
          </Tabs.Tab>
          <Tabs.Tab
            value="guides"
            ref={setControlRef("guides")}
            className={classes.tab}
          >
            Справочники
          </Tabs.Tab>

          <FloatingIndicator
            target={value ? controlsRefs[value] : null}
            parent={rootRef}
            className={classes.indicator}
          />
        </Tabs.List>

        <Tabs.Panel value="users">First tab content</Tabs.Panel>
        <Tabs.Panel value="backups">Second tab content</Tabs.Panel>
        <Tabs.Panel value="guides">Third tab content</Tabs.Panel>
      </Tabs>
    </Box>
  );
}
