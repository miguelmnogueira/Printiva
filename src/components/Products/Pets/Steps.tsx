import { Timeline, type TimelineItem } from "@/components/timeline";

export default function Steps({ items }: { items: TimelineItem[] }) {
	return <Timeline items={items} variant={"spacious"} />;
}
