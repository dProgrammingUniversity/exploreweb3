import { title } from "@/components/primitives";
import Directory from "@/components/Directory";

export default function DirectoryPage() {
	return (
		<div>
			<h1 className={title()}>Solana dApps & Tools Directory</h1>
			<Directory />
		</div>
	);
}
