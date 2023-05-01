import Icon from "../Icon/Icon";
import FileInput from "../FileInput/FileInput";
import { devViewState, ExportModalState, InfoModalState, PageState } from "../../state";

export default function Navbar() {
    const setPageState = PageState((state) => state.setPageState)
    let isDevView = devViewState((state) => state.isDevView);
    let setDevView = devViewState((state) => state.setDevView);
    let setShown = ExportModalState((state) => state.setShown);
    let setVisible = InfoModalState((state) => state.setVisible);

    return (
        <nav className="flex h-14 bg-gray-200 items-center">
            <button onClick={() => setVisible(true)} className="border-2 border-black text-[20px] bg-gray-200 rounded-full w-[40px] h-[40px] m-4">
                i
            </button>
            <button onClick={() => setDevView(!isDevView)} className={`py-2 px-4 bg-blue-400 mr-auto ml-4 rounded-lg ${ import.meta.env.MODE == "development" ? "visible" : "invisible" } `}>
                Dev View
            </button>

            <FileInput name={"data-input"} onChange={(data) => setPageState(JSON.parse(data))} />
            <button onClick={() => setShown(true)} className="py-2 px-4 bg-blue-400 mr-4 rounded-lg">
                <Icon name="arrow-down-tray" />
            </button>
        </nav>
    )
}