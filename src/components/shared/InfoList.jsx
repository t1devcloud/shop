export default function InfoList({classes, data, pClass}) {
  const {title, list} = data;
  return (
    <div className={`customer-info pb-12 ${classes}`}>
      <div className="title mb-16">
        <h4>{title}</h4>
      </div>

      <ul>
        {
          list.map(({id, name, text}, index) => (
            <li key={id} className="d-flex align-items-center justify-content-between">
              <p>{name}</p>
              <p className={pClass && (pClass.item === index+1 ? pClass.data : '')}>{text}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
