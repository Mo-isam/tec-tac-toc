import stayle from "./page.module.css"
import Link from "next/link";
function about() {
    return (
        <div>
            <h2 className={stayle.h2}>about page</h2>
            <Link href="/">home</Link>
        </div>
    );
}
export default about;
