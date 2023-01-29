
import Titlebar from './Titlebar';
import Sidebar from './Sidebar';

export default function Base ({ children}) {

    return (
        <>
        <div className="flex flex-col justify-between h-screen">
            <Titlebar />
            <div className="flex bg-zinc-700 h-full">
                <Sidebar />
                { children }
            </div>
        </div>
        </>
    );

}