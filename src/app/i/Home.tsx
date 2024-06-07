'use client'

import { Banner } from '@/components/banner/Banner'
import { DashboardHeader } from '@/components/dashboard-layout/header/DashboardHeader'
import { Heading } from '@/components/dashboard-layout/header/Heading'
import { TopWorkoutContainer } from '@/components/dashboard-layout/top-workout/TopWorkoutContainer'
import { WorkoutList } from '@/components/dashboard-layout/workout-list/WorkoutList'

import { useCompleted } from '@/hooks/useCompleted'
import { useWorkouts } from '@/hooks/useWorkouts'

export function Home() {
	const { data: completedData, isLoading: completedLoading } = useCompleted()
	const { data: workoutData, isLoading: workoutLoading } = useWorkouts()

	const favoriteWorkouts =
		workoutData?.filter((workout: any) => workout.isFavorite) || []

	return (
		<>
			<DashboardHeader
				title='Home'
				description='Welcome to home page'
			/>

			<Banner />
			<div className='absolute right-2 top-[105px] 3xl:hidden'>
				<TopWorkoutContainer
					title='Top Workouts'
					linkHref={`/i/workout/favorites`}
					isFavorite={true}
					workoutItemProps={{
						data: favoriteWorkouts.slice(0, 3),
						isLoading: workoutLoading
					}}
				/>
			</div>
			<div className='absolute right-2 top-[605px] 3xl:hidden'>
				<TopWorkoutContainer
					isFavorite={false}
					title='History'
					linkHref={`/i/workout/history`}
					workoutItemProps={{
						data: completedData?.slice(0, 5),
						isLoading: completedLoading
					}}
				/>
			</div>

			<Heading title='New Workout' />
			<WorkoutList
				data={workoutData}
				isLoading={workoutLoading}
			/>
			<Heading title='Workout save' />
			<WorkoutList
				data={workoutData}
				isLoading={workoutLoading}
			/>
		</>
	)
}
