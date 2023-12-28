import { gql } from "urql";

export const streamSendQuery = gql`
  query streamSendQuery($sender: ID) {
    streams(where: { sender: $sender }) {
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
