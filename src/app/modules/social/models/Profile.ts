export interface Profile {

    idUser: number
    name: string
    nickname: string
    email: string
    bornDate: Date
    following: FollowProfile[]
    followers: FollowProfile[]

}

export interface FollowProfile {
    idUser: number
    name: string
    nickname: string
}

export interface ProfileSearch {
    nickname: string
    following: FollowProfile[]
    followers: FollowProfile[]
}