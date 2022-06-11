export default function Week({week, isActive, year, page, onClickFunction}) {
    return <div onClick={() => onClickFunction(page)} className={isActive?"week active":"week"}>Week {week}, {year}</div>
}