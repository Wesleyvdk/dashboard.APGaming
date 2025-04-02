import { Player, Team, Game, News } from "@prisma/client"

const API_BASE_URL = process.env.NEXT_PUBLIC_DASHBOARD_API_URL || "http://localhost:3000/api"

// Helper function to handle API responses
async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error = await response.json().catch(() => ({}))
        throw new Error(error.message || `API error: ${response.status}`)
    }
    return response.json()
}

// Function to get the auth token
function getAuthToken(): string | null {
    if (typeof window !== "undefined") {
        return localStorage.getItem("authToken")
    }
    return null
}

// Function to create headers with auth token
function createHeaders(): HeadersInit {
    const headers: HeadersInit = {
        "Content-Type": "application/json",
    }

    const token = getAuthToken()
    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    return headers
}

// Players
export async function fetchPlayers(): Promise<Player[]> {
    const response = await fetch(`${API_BASE_URL}/players`, {
        headers: createHeaders(),
    })
    return handleResponse<Player[]>(response)
}

export async function fetchPlayer(id: string): Promise<Player> {
    const response = await fetch(`${API_BASE_URL}/players/${id}`, {
        headers: createHeaders(),
    })
    return handleResponse<Player>(response)
}

export async function createPlayer(data: Partial<Player>): Promise<Player> {
    const response = await fetch(`${API_BASE_URL}/players`, {
        method: "POST",
        headers: createHeaders(),
        body: JSON.stringify(data),
    })
    return handleResponse<Player>(response)
}

export async function updatePlayer(id: string, data: Partial<Player>): Promise<Player> {
    const response = await fetch(`${API_BASE_URL}/players/${id}`, {
        method: "PATCH",
        headers: createHeaders(),
        body: JSON.stringify(data),
    })
    return handleResponse<Player>(response)
}

export async function deletePlayer(id: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/players/${id}`, {
        method: "DELETE",
        headers: createHeaders(),
    })
    return handleResponse<void>(response)
}

// Teams
export async function fetchTeams(): Promise<Team[]> {
    const response = await fetch(`${API_BASE_URL}/teams`, {
        headers: createHeaders(),
    })
    return handleResponse<Team[]>(response)
}

export async function fetchTeam(id: string): Promise<Team> {
    const response = await fetch(`${API_BASE_URL}/teams/${id}`, {
        headers: createHeaders(),
    })
    return handleResponse<Team>(response)
}

// Events
export async function fetchEvents(): Promise<Event[]> {
    const response = await fetch(`${API_BASE_URL}/events`, {
        headers: createHeaders(),
    })
    return handleResponse<Event[]>(response)
}

// News
export async function fetchNewsArticles(): Promise<News[]> {
    const response = await fetch(`${API_BASE_URL}/news`, {
        headers: createHeaders(),
    })
    return handleResponse<News[]>(response)
}

// Games
export async function fetchGames(): Promise<Game[]> {
    const response = await fetch(`${API_BASE_URL}/games`, {
        headers: createHeaders(),
    })
    return handleResponse<Game[]>(response)
}

export async function fetchGame(id: string): Promise<Game> {
    const response = await fetch(`${API_BASE_URL}/games/${id}`, {
        headers: createHeaders(),
    })
    return handleResponse<Game>(response)
}

