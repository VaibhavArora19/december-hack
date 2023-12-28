import { gql } from "urql";

export const streamSendQuery = gql`
  query streamSendQuery($sender: ID, $receiver: ID) {
    streams(where: { sender: $sender, receiver: $receiver }) {
      currentFlowRate
      receiver {
        id
        accountTokenSnapshots {
          totalAmountStreamedInUntilUpdatedAt
        }
      }
      createdAtTimestamp
    }
  }
`;
