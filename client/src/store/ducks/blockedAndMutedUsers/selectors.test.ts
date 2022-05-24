import {
    selectBlockedUsersItems,
    selectIsBlockedAndMutedUsersLoaded,
    selectIsBlockedAndMutedUsersLoading,
    selectMutedUsersItems
} from "./selectors";
import {LoadingStatus} from "../../types";
import {createMockRootState} from "../../../util/testHelper";
import {mockBlockedUsers, mockMutedUsers} from "../../../util/mockData/mockData";

describe("blockedAndMutedUsers selectors:", () => {
    const mockState = createMockRootState();
    
    describe("selectMutedUsersItems", () => {
        it("should return MutedUserResponse array", () => {
            expect(selectMutedUsersItems({
                ...mockState,
                blockedAndMutedUsers: {...mockState.blockedAndMutedUsers, mutedUsers: mockMutedUsers}
            })).toBe(mockMutedUsers);
        });
    });

    describe("selectBlockedUsersItems", () => {
        it("should return BlockedUserResponse array", () => {
            expect(selectBlockedUsersItems({
                ...mockState,
                blockedAndMutedUsers: {...mockState.blockedAndMutedUsers, blockedUsers: mockBlockedUsers}
            })).toBe(mockBlockedUsers);
        });
    });

    describe("selectIsBlockedAndMutedUsersLoading", () => {
        it("should return correct result", () => {
            expect(selectIsBlockedAndMutedUsersLoading(createMockRootState(LoadingStatus.LOADING))).toBe(true);
        });
    });

    describe("selectIsBlockedAndMutedUsersLoaded", () => {
        it("should return correct result", () => {
            expect(selectIsBlockedAndMutedUsersLoaded(createMockRootState(LoadingStatus.LOADED))).toBe(true);
        });
    });
});
