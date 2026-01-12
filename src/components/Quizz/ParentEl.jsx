import MyComponant from './Quizz'

export default function ParentEl() {
  const isConnected = 'jena'
  return (
    <div>
      <MyComponant isConnected={isConnected} />
    </div>
  )
}
