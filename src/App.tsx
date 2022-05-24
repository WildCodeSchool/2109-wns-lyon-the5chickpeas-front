import React from "react"
import { Router } from "./Router"
// styles
import GlobalStyle from "./components/Global"
import { AuthProvider } from "./hooks/auth"

function App() {
  return (

      <div className="App">
        <AuthProvider>
          <GlobalStyle />
          <Router />
        </AuthProvider>
      </div>
  )
}

export default App

/* import React, { createContext, useState } from "react"
import { Router } from "./Router"
// styles
import GlobalStyle from "./components/Global"

//définition du type de User avec les infos que l'on veut pour la navigation
interface UserType {
  name: string
  age?: string
  token?: string
}

const user1 = {
  name: "Marin",
  age: "38",
  token: "jkhbckjhbscgjehè5678765",
}

//définition du type qu'aura User tout au long de notre context.
//on y inclut d'office les types des états à login et logout = type de notre context
type UserContextType = {
  user: UserType | null
  login: (user: UserType) => void
  logout: () => void
} | null

//création du context typé avec les différents états
const UserContext = React.createContext<UserContextType>(null)

//on crée userProvider ici et on l'export pour que le state qui va avec le context y soit rattaché
//UserProvider est bien un react component qui a des children (donc FonctionalComponent)
//initial state est bien a UserType car au début soit user soit null
export const UserProvider: React.FC<{ initialState: UserType }> = ({
  children,
  initialState,
}) => {
  const [state, setState] = useState<UserType | null>(initialState)

  //dans le provider on vient dire ce que chaque fonction devra faire
  //chacune est déja typée + haut et le type qui le fait est appliqué au Provider
  const login = (user: UserType) => setState(user)
  const logout = () => setState(null)
  //on met toutes les fonctions dedans pour ensuite ne passer qu'un seul object ds la value
  //du provider(cela évite d'exposer le set state et c'est + secure)
  const value = {
    user: state,
    login,
    logout,
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

console.log(user1)

const useUser = () => {
  const value = React.useContext(UserContext)
  if (value == null) throw "context is null"
  return value
}
//si erreur revient = on a personne de loggé

//on destructure le hook useUser avec toutes les fonctions qu'il englobe
function App() {
  const { user, login, logout } = useUser()
  return (
    <div className="App">
      <GlobalStyle />
      <Router />
    </div>
  )
}

export default App
 */
