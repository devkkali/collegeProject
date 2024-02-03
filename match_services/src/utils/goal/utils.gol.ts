import { eventModel } from "../../database/models/event/event.model";

async function calculateTotalGoal(matchId: string, teamPlayers: string[]): Promise<number> {
  try {
    // Get all events related to the match
    const allEvents = await eventModel.Event.find({ match_id: matchId });

    // Filter events based on whether player's ID is in teamPlayers array
    const filteredEvents = allEvents.filter(event => teamPlayers.includes(event.player_id as any));

    // Calculate total goals by summing up the 'no_goals' property of each event
    const totalGoals = filteredEvents.reduce((total, event) => total + parseInt(event.no_goals as any, 10), 0);

    return totalGoals;
  } catch (error) {
    // Handle errors
    console.error('Error calculating total goals:', error);
    throw error;
  }
}

export { calculateTotalGoal };
