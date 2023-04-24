import { useEffect, useState, useRef, memo, useCallback } from "react"

const Options = ({
  switches = {},
  setSwitches = () => {},
  moduleName = ''
}) => {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const args = switches[moduleName + 'Arg'] ?? {}

  const handleOptionChange = useCallback((e) => {
    const _option = args[e.target.name] = e.target.checked
    setSwitches({ ...switches, _option })
  }, [switches])

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", checkIfClickedOutside)

    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <div id="toggle" className="inline-flex cursor-pointer" onClick={() => setOpen(state => !state)}>
        <div className="text-blue-500 text-base font-normal">Options</div>
        <svg className="fill-blue-500 h-4 w-4 mt-1 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>

      <div id="hidden" className={`${open ? 'visible' : 'invisible'} px-4 py-6 absolute -right-4 sm:right-0 top-7 z-10 text-left text-base text-gray-700 bg-white border rounded border-gray-200 shadow-lg`}>
        <div className="px-2 font-semibold">Protection from</div>
        <hr />
        <div className="pt-4 px-2 group relative">
          <input onChange={handleOptionChange} type="checkbox" name="suddenSize" checked={args.suddenSize} className="enabled:hover:border-gray-400 disabled:opacity-75 checked:bg-blue-500 cursor-pointer" />
          <label className="ml-2 font-normal">Sudden size and bidders above decreasing</label>
          <span className="absolute -top-3 left-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Todo: Description</span>
        </div>
        <div className="pt-2 px-2 group relative">
          <input onChange={handleOptionChange} type="checkbox" name="noDump" checked={args.noDump} className="enabled:hover:border-gray-400 disabled:opacity-75 checked:bg-blue-500 cursor-pointer" />
          <label className="ml-2 font-normal">No dump for a long time</label>
          <span className="absolute -top-5 left-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Todo: Description</span>
        </div>
        <div className="pt-2 px-2 group relative">
          <input onChange={handleOptionChange} type="checkbox" name="ethPump" checked={args.ethPump} className="enabled:hover:border-gray-400 disabled:opacity-75 checked:bg-blue-500 cursor-pointer" />
          <label className="ml-2 font-normal">ETH 1h/24h pump</label>
          <span className="absolute -top-5 left-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Todo: Description</span>
        </div>
        <div className="pt-2 px-2 group relative">
          <input onChange={handleOptionChange} type="checkbox" name="collectionPump" checked={args.collectionPump} className="enabled:hover:border-gray-400 disabled:opacity-75 checked:bg-blue-500 cursor-pointer" />
          <label className="ml-2 font-normal">Collection 1D pump</label>
          <span className="absolute -top-5 left-7 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">Todo: Description</span>
        </div>
      </div>
    </div>
  )
}

export default memo(Options)

{/* <div className="pt-2 px-2 font-semibold">Aggression level</div>
        <div className="py-1 px-2 flex justify-start" onChange={(e) => setAggressionLevel(e.target.value)}>
          <div>
            <input type="radio" defaultChecked={aggressionLevel === 'low'} value="low" name="aggressionLevel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">Low</label>
          </div>
          <div className="ml-4">
            <input type="radio" defaultChecked={aggressionLevel === 'medium'} value="medium" name="aggressionLevel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">Medium</label>
          </div>
          <div className="ml-4">
            <input type="radio" defaultChecked={aggressionLevel === 'high'} value="high" name="aggressionLevel" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
            <label className="ml-2 text-sm font-normal text-gray-900 dark:text-gray-300">High</label>
          </div>
        </div> */}