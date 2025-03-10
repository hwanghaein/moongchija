export interface TimeVoteUserRepository {
  voteForTime(userId: string, timeId: number, memberId: number): Promise<void>; // 특정 시간에 대한 투표 추가
  getUsersByTime(
    timeId: number
  ): Promise<{ user_id: string; nickname: string }[]>; // 특정 시간에 투표한 유저 목록 조회
}
